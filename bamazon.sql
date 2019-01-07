CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INTEGER auto_increment not null,
    product_name VARCHAR(100) not null,
    department_name INTEGER(11),
    price INTEGER(11) not null,
    stock_quantity INTEGER(11),
    primary key (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, deparment_name, price, stock_quantity)

VALUES
('Avengers: Infinity War', 'Movies', 19.99, 300),
('iPhone X Case', 'iPhone Accessories', 14.99, 75),
('Zignature Dog Food', 'Pet Food', 79.99, 30),
('Dog Bowl', 'Pet Accessories', 12.99, 25),
('Dog Leash', 'Pet Accessories', 18.99, 16),
('Contigo Water Bottle', 'Dishes', 19.99, 60),
('Gorgon City: Kingdom', 'Music', 9.99, 900),
('Macbook Pro Cover', 'Macbook Accessories', 12.99, 45),
('USB-C 10ft Cord', 'Electronic Accessories', 17.99, 13),
-- ('Mens Reebok Nano 8', 'Mens Shoes', 89.99, 5);