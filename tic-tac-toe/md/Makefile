plantuml=plantuml 
src=$(wildcard *.plu)
svgs=$(src:.plu=.svg)
pngs=$(src:.plu=.png)
.PHONY: all clean diagram svgs pngs

all: svgs pngs
	@echo 'generate diagrams(svg,png) from plantuml files'
clean:
	@echo "delete all image files (png & svg)"
	@\rm -f *.png *.svg

svgs: $(svgs)
pngs: $(pngs)

%.svg: %.plu
	@echo "generate: $< -> $@"
	@$(plantuml) -svg $<
%.png: %.plu
	@echo "generate: $< -> $@"
	@$(plantuml) -png $<








