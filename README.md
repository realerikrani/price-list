# price-list

A project that turns a JSON inventory to a HTML file that can be used as a price list.

Run the binary file by providing a JSON file input path and
and desired HTML file output path. Use `-h` for help.

Group products by using group ids.

Define the order of groups in the price list with `groups.ids` in the file.

An example valid JSON file content:

```json
{
  "products": [
    {
      "info": "Cheese",
      "extraInfo": "Five-Year Aged Cheddar",
      "price": "500",
      "groupId": "dairy"
    },
    {
      "info": "Milk",
      "extraInfo": null,
      "price": "10",
      "groupId": "dairy"
    },
    {
      "info": "Orange",
      "extraInfo": null,
      "price": "320",
      "groupId": "fruits"
    },
    {
      "info": "Lemon",
      "extraInfo": null,
      "price": "200",
      "groupId": "fruits"
    },
    {
      "info": "Kiwi",
      "extraInfo": "Rich in Vitamin C",
      "price": "200",
      "groupId": "fruits"
    }
  ],
  "groups": {
    "ids": [
      "dairy",
      "fruits"
    ],
    "entities": {
      "fruits": {
        "title": "Healthy Fruits",
        "info": null
      },
      "dairy": {
        "title": "Best Dairy",
        "info": "Products of Local Farmers"
      }
    }
  }
}

```
