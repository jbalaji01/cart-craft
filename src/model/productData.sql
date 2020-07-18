SET DB_CLOSE_DELAY -1;        
;             
CREATE USER IF NOT EXISTS "CARTCRAFT" SALT '6d9d6a860c5545b9' HASH 'c8baa838d79840fa2dbb2020f28ddf91bed19154c0c2a915198b0f3977d201dc' ADMIN;  
CREATE SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_A8554F10_C122_4EDF_895A_705FAB26932E" START WITH 11 BELONGS_TO_TABLE;               
CREATE SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_CE2930AA_E4D7_4713_A5CC_A8C609B5FC65" START WITH 11 BELONGS_TO_TABLE;               
CREATE SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_CC82B46D_434A_4283_A9E9_D80A8A332D60" START WITH 6 BELONGS_TO_TABLE;
CREATE SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_254C55AF_C094_4F28_9AAC_1F8686DF9F33" START WITH 5 BELONGS_TO_TABLE;
CREATE CACHED TABLE "PUBLIC"."PRODUCT"(
    "ID" BIGINT DEFAULT NEXT VALUE FOR "PUBLIC"."SYSTEM_SEQUENCE_A8554F10_C122_4EDF_895A_705FAB26932E" NOT NULL NULL_TO_DEFAULT SEQUENCE "PUBLIC"."SYSTEM_SEQUENCE_A8554F10_C122_4EDF_895A_705FAB26932E",
    "PRODUCT_NAME" VARCHAR(255),
    "DESCRIPTION" VARCHAR(255),
    "PRICE" FLOAT4,
    "IMAGE" VARCHAR(255)
);      
ALTER TABLE "PUBLIC"."PRODUCT" ADD CONSTRAINT "PUBLIC"."PK_PRODUCT" PRIMARY KEY("ID");        
-- 10 +/- SELECT COUNT(*) FROM PUBLIC.PRODUCT;
INSERT INTO "PUBLIC"."PRODUCT" VALUES
(1, 'Generic Steel Tuna', 'catch a fish', 100.0, 'fish'),
(2, 'wireless Computer', 'Legacy Dynamic coding', 200.0, 'laptop-code'),
(3, 'Steel', 'very tough one', 300.0, 'drum-steelpan'),
(4, 'Internal compressing', 'High pressure is applied', 400.0, 'compress-arrows-alt'),
(5, 'Drive neutral', 'Rustic Concrete Car', 500.0, 'car'),
(6, 'Identity orange Security', 'Data Identity', 600.0, 'shield-alt'),
(7, 'Personal Loan Account', 'Pre-approved package', 700.0, 'landmark'),
(8, 'withdrawal Rubber', 'Chips Bike Keyboard', 800.0, 'eraser'),
(9, 'methodical optical', 'clear vision', 900.0, 'glasses'),
(10, 'Game board', 'addictive', 1000.0, 'gamepad');               
