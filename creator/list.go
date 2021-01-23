package creator

import (
	"encoding/json"
	"html/template"
	"io/ioutil"
	"os"

	"github.com/realerikrani/price-list/group"
	"github.com/realerikrani/price-list/product"
)

// Context for template
type Context struct {
	Title            string
	ProductsEnvelope product.Envelope
	GroupsEnvelope   group.Envelope
}

// CreatePriceList ...
func CreatePriceList(input string, output string) error {
	data, err := ioutil.ReadFile(input)
	if err != nil {
		return err
	}

	var products product.Envelope
	var groups group.Envelope

	err = json.Unmarshal(data, &products)
	if err != nil {
		return err
	}

	err = json.Unmarshal(data, &groups)
	if err != nil {
		return err
	}

	f, err := os.Create(output)
	if err != nil {
		return err
	}

	context := Context{"price-list", products, groups}

	templates, err := template.ParseFiles(
		"creator/list.gohtml",
		"creator/list-style.gohtml",
		"product/product.gohtml",
		"group/group_header.gohtml",
		"group/groups.gohtml",
	)
	if err != nil {
		return err
	}

	if err = templates.Execute(f, context); err != nil {
		f.Close()
		return err
	}

	return f.Close()
}
