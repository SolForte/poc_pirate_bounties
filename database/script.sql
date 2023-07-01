CREATE TABLE "bounties"
(
    "id" serial NOT NULL,
    "name" text NOT NULL,
    "nickname" text NOT NULL,
    "bounty" money NOT NULL,
    "createdAt" time without time zone NOT NULL DEFAULT now(),
    CONSTRAINT "bounties_pkey" PRIMARY KEY (id)
);

INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Monkey D. Luffy', 'Straw Hat', 3000000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Roronoa Zoro', 'Pirate Hunter', 1111000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Nami', 'Cat Burglar', 366000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('God Usopp', 'Sogeking', 500000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Sanji', 'Black Leg', 1032000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Tony Tony Chopper', 'Cotton Candy Lover', 1000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Nico Robin', 'Devil Child', 930000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Franky', 'Iron Man', 394000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Brook', 'Soul King', 383000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Jinbe', 'Knight of the Sea', 1100000000);
INSERT INTO bounties ("name", "nickname", "bounty") VALUES ('Shanks', 'Red Hair', 4048900000);