package main

import (
	"flag"
	"log"

	"github.com/realerikrani/price-list/creator"
)

func main() {
	inputPtr := flag.String("input", "./price-list.json", "a path to a JSON file")
	outputPtr := flag.String("output", "./price-list.html", "an output path for HTML")
	flag.Parse()

	if err := creator.CreatePriceList(*inputPtr, *outputPtr); err != nil {
		log.Fatal(err)
	}
}
