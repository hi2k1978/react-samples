subdirs=./md
.PHONY: all clean plantuml force

all:
	@echo 'this is tic-tac-toe.'
clean: $(subdirs)
plantuml: svgs pngs
svgs: $(subdirs)
pngs: $(subdirs)

$(subdirs): force
	make -C $@ $(MAKECMDGOALS)
force:
