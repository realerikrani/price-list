package main

import (
	"embed"
	"flag"
	"log"
	"text/template"
	"time"

	"github.com/realerikrani/price-list/creator"
)

//go:embed tmplhtml/*.gohtml
var f embed.FS

func main() {
	input := flag.String("input", "./price-list.json", "a path to a JSON file")
	output := flag.String("output", "./price-list.html", "an output path for HTML")
	dt := time.Now()

	notice := flag.String(
		"notice",
		"Effective "+dt.Format("2 January 2006"),
		"a notice on top of the page",
	)
	flag.Parse()

	templates, err := template.ParseFS(f,
		"tmplhtml/list.gohtml",
		"tmplhtml/list-style.gohtml",
		"tmplhtml/product.gohtml",
		"tmplhtml/group-header.gohtml",
		"tmplhtml/groups.gohtml",
	)
	if err != nil {
		log.Fatal(err)
	}

	if err := creator.CreatePriceList(*input, *output, *notice, *templates); err != nil {
		log.Fatal(err)
	}
}
