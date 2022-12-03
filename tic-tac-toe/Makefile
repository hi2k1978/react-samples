subdirs=./md
readme:=README.md
pdf=$(readme:.md=.pdf)

.PHONY: all clean force md svgs pngs pdf

all: svgs pdf

clean: $(subdirs)
	\rm $(pdf)

force:

$(subdirs): force
	make -C $@ $(MAKECMDGOALS)

md: $(subdirs)
svgs: $(subdirs)
pngs: $(subdirs)

$(pdf): $(readme) force
	pandoc -V pagesize:a4 $< -f gfm -t html5 -o $@ -c ./md/github.css \
		--pdf-engine=wkhtmltopdf \
		--pdf-engine-opt=--enable-local-file-access

pdf: $(pdf)

