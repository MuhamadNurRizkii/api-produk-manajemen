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

| Field       | Type                     | Required |
| ----------- | ------------------------ | -------- |
| name        | String                   | ✅       |
| description | Number                   | ✅       |
| price       | Number                   | ✅       |
| stock       | Number                   | ✅       |
| type        | String [Makanan,Minuman] | ✅       |
| image       | file                     | ✅       |

<br/>

### 🚀 Response Body

_success status_: `201`

```json
{
  "message": "succes message"
}
```

_success error_: `400`

```json
{
  "message": "error message"
}
```

---

<br/>

## **READ - GET:**

**URL** : `/admin/api/products?page=1&limit=10`  
**Method** : `GET`

### 🚀 Response Body

_success status_: `200`

```json
{
  "message": "Product berhasil diambil",
  "total": 1,
  "page": 1,
  "totalPage": 1,
  "data": [
    {
      "_id": "68c02d6a8496....",
      "name": "Mie Ayam",
      "description": "Mie Ayam dengan ayam tiren",
      "price": 10000,
      "stock": 50,
      "type": "Makanan",
      "imageUrl": "url image",
      "imageId": "id image",
      "createdAt": "2025-09-09T13:36...",
      "updatedAt": "2025-09-09T13:36..."
    }
  ]
}
```

_success error_: `400`

```json
{
  "message": "error message"
}
```

---

<br/>

## **READ By Id - GET:**

**URL** : `/admin/api/products/:id`  
**Method** : `GET`

### 🚀 Response Body

_success status_: `200`

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

_success error_: `400`

```json
{
  "message": "error message"
}
```

---

<br/>

## **UPDATE - PUT:**

**URL** : `/admin/api/products/edit/:id`  
**Method** : `PUT`  
**Content-Type** : `multipart/form-data`

### 📝 Request Body

| Field       | Type                     | Required |
| ----------- | ------------------------ | -------- |
| name        | String                   | ✅       |
| description | Number                   | ✅       |
| price       | Number                   | ✅       |
| stock       | Number                   | ✅       |
| type        | String [Makanan,Minuman] | ✅       |
| image       | file                     | ✅       |

<br/>

### 🚀 Response Body

_success status_: `201`

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

_success error_: `400`

```json
{
  "message": "error message"
}
```

<br/>

## **DELETE by Id - DELETE:**

**URL** : `/admin/api/products/delete/:id`  
**Method** : `DELETE`

### 🚀 Response Body

_success status_: `200`

```json
{
  "message": "succes message"
}
```

_success error_: `400`

```json
{
  "message": "error message"
}
```
