const ecommerceProtocol = {
    "protocol": "https://ecommerce.web5",
    "published": true,
    "types": {
      "product": {
        "schema": "https://ecommerce.web5/schemas/productSchema",
        "dataFormats": ["application/json"]
      },
      "order": {
        "schema": "https://ecommerce.web5/schemas/orderSchema",
        "dataFormats": ["application/json"]
      },
      "payment": {
        "dataFormats": ["application/json"]
      },
      "review": {
        "schema": "https://ecommerce.web5/schemas/reviewSchema",
        "dataFormats": ["text/plain"]
      },
      "user": {
        "schema": "https://ecommerce.web5/schemas/userSchema",
        "dataFormats": ["application/json"]
      }
    },
    "structure": {
      "user": {
        "$actions": [
          {
            "who": "self",
            "can": ["read", "write"]
          }
        ]
      },
      "product": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "buyer",
            "can": "write"
          }
        ],
        "review": {
          "$actions": [
            {
              "who": "anyone",
              "can": "read"
            },
            {
              "who": "buyer",
              "of": "product",
              "can": "write"
            }
          ]
        }
      },
      "order": {
        "$actions": [
          {
            "who": "buyer",
            "can": "read"
          },
          {
            "who": "buyer",
            "can": "write"
          }
        ],
        "payment": {
          "$actions": [
            {
              "who": "buyer",
              "can": "read"
            },
            {
              "who": "buyer",
              "can": "write"
            }
          ]
        }
      }
    }
}