plantuml=plantuml 
src=$(wildcard *.plu)
svgs=$(src:.plu=.svg)
pngs=$(src:.plu=.png)
.PHONY: all clean md svgs pngs

all: md
	@echo 'generate images(svg) from plantuml files'
clean:
	@echo "delete image files[png, svg]"
	@\rm -f *.png *.svg

md: svgs pngs
svgs: $(svgs)
pngs: $(pngs)

%.svg: %.plu
	@echo "- generate: $< -> $@"
	@$(plantuml) -svg $<
%.png: %.plu
	@echo "- generate: $< -> $@"
	@$(plantuml) -png $<








