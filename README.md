# API PRODUK MANAJEMEN

#### Api ini dibuat untuk belajar crud dan bisa digunakan juga untuk frontend belajar cara fecth data

<br/>
<br/>
<br/>

## **CREATE - POST:** 


**URL** : `/admin/api/products/add`  
**Method** : `POST`  
**Content-Type** : `multipart/form-data`

### 📝 Request Body
| Field        | Type   | Required | 
|--------------|--------|----------|
| name         | String | ✅       | 
| description  | Number | ✅       | 
| price        | Number | ✅       | 
| stock        | Number | ✅       | 
| type         | String [Makanan,Minuman] | ✅ |
| image        | file   | ✅ |

<br/>


### 🚀 Response Body

*success status*: `201`

```json 
{
  "message": "succes message"
}
```

*success error*: `400`

```json 
{
  "message": "error message"
}
```

---
<br/>

## **READ - GET:** 


**URL** : `/admin/api/products`  
**Method** : `GET`  

### 🚀 Response Body

*success status*: `200`

```json 
{
  "message": "succes message",
  "data" : [
      "_id": "68ba4cabbac3c...",
      "name": "name",
      "description": "description",
      "price": 18000,
      "stock": 10,
      "type": "Makanan",
      "imageUrl": "url_image",
      "imageId": "id_image"
  ]
}
```

*success error*: `400`

```json 
{
  "message": "error message"
}
```
