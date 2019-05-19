# price-list

Open <https://realerikrani.github.io/price-list> and upload a JSON file with the correct structure.

Click the print button to open the print view.

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
