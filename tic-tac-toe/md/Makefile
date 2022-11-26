plantuml=plantuml 
src=$(wildcard *.plu)
svgs=$(src:.plu=.svg)
pngs=$(src:.plu=.png)
.PHONY: all clean plantuml svgs pngs

all: plantuml
	@echo 'generate diagrams(svg,png) from plantuml files'

clean:
	@echo "delete all image files (png & svg)"
	@\rm -f *.png *.svg

plantuml: svgs pngs

svgs: $(svgs)
pngs: $(pngs)

%.svg: %.plu
	@echo "- generate: $< -> $@"
	@$(plantuml) -svg $<
%.png: %.plu
	@echo "- generate: $< -> $@"
	@$(plantuml) -png $<








