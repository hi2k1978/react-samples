subdirs:=./md
readme:=README.md
pdf:=$(readme:.md=.pdf)
html:=$(readme:.md=.html)
css:=./md/github.css

dockerfile:=httpd/Dockerfile
dockertag:=tictactoe

.PHONY: all clean force md svgs pngs pdf docker-build docker-run docker-stop docker-rmi

all: svgs pdf

clean: $(subdirs)
	@\rm -f $(pdf) $(html)
	@echo "clean current directory & sub-directories"

force:

$(subdirs): force
	make -C $@ $(MAKECMDGOALS)

md: $(subdirs)
svgs: $(subdirs)
pngs: $(subdirs)

$(pdf): $(readme) force
	pandoc -V pagesize:a4 $< -f gfm -t html5 -o $@ -c $(css) \
		--pdf-engine=wkhtmltopdf \
		--pdf-engine-opt=--enable-local-file-access

pdf: $(pdf)

docker-build: docker-rmi force
	@npm run build
	@sudo docker build -t $(dockertag) -f $(dockerfile) .

docker-run: force
	@sudo docker run -dit --name $(dockertag) -p 8080:80 $(dockertag)

docker-stop: force
	@sudo docker stop $(dockertag)
	@sudo docker rm $(dockertag)

docker-rmi: force
	@sudo docker rmi -f $(dockertag)

docker-sh: force
	@sudo docker exec -it $(dockertag) /bin/bash
