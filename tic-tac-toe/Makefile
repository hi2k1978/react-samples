subdirs=./md
.PHONY: all clean force md svgs pngs

all:
	@echo 'this is tic-tac-toe.'
clean: $(subdirs)

$(subdirs): force
	make -C $@ $(MAKECMDGOALS)
force:

md: $(subdirs)
svgs: $(subdirs)
pngs: $(subdirs)
