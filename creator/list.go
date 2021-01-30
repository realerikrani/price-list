package creator

import (
	"encoding/json"
	"io/ioutil"
	"os"
	"text/template"

	"github.com/realerikrani/price-list/group"
	"github.com/realerikrani/price-list/product"
)

// Context for template
type Context struct {
	Title            string
	Notice           string
	ProductsEnvelope product.Envelope
	GroupsEnvelope   group.Envelope
}

// CreatePriceList ...
func CreatePriceList(
	input string, output string, notice string, templates template.Template,
) error {
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

	context := Context{"price-list", notice, products, groups}

	if err = templates.Execute(f, context); err != nil {
		f.Close()
		return err
	}

	return f.Close()
}
