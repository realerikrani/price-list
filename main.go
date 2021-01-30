package main

import (
	_ "embed"
	"flag"
	"log"
	"text/template"
	"time"

	"github.com/realerikrani/price-list/creator"
)

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

	//go:embed tmplhtml/list.gohtml
	var listHTML string
	//go:embed tmplhtml/list-style.gohtml
	var listStyleHTML string
	//go:embed tmplhtml/product.gohtml
	var productHTML string
	//go:embed tmplhtml/group-header.gohtml
	var groupHeaderHTML string
	//go:embed tmplhtml/groups.gohtml
	var groupsHTML string

	tmpl := template.New("tmpl")
	tmpl.Parse(listHTML)
	tmpl.Parse(listStyleHTML)
	tmpl.Parse(productHTML)
	tmpl.Parse(groupHeaderHTML)
	tmpl.Parse(groupsHTML)

	if err := creator.CreatePriceList(*input, *output, *notice, *tmpl); err != nil {
		log.Fatal(err)
	}
}
