

CREATE TABLE cruiseShip (
  [Id] int,
  [Rooms Available] int,
  [Total Rooms] int,
  [Port City] varchar(50),
  [Port State, Country] varchar(50),
  [shipName] varchar(50),
  [cruiseLine] varchar(50),
  [Destination] varchar(30),
  [adultPrice] money,
  [childPrice] money,
  [roomPrice] money,
  [img1] varchar(50),
  [img2] varchar(50),
  [img3] varchar(50),
  [img4] varchar(50),
  PRIMARY KEY ([Id])
);

CREATE TABLE [Customer] (
  [ID] int,
  [email] varchar(50),
  [password] varchar(50),
  [firstName] varchar(50),
  [lastName] varchar(50),
  [streetAddress] varchar(50),
  [city] varchar(50),
  [state] varchar(50),
  [zipCode] int,
  [balance] money,
  PRIMARY KEY ([ID])
);

CREATE TABLE cruiseTicket (
  [ID] int,
  [custID] int,
  [shipID] int,
  [Rooms] int,
  [childGuests] int,
  [adultGuests] int,
  [totalCost] money,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_Cruise Ticket.shipID]
    FOREIGN KEY ([shipID])
      REFERENCES [cruiseShip]([Id]),
  CONSTRAINT [FK_Cruise Ticket.custID]
    FOREIGN KEY ([custID])
      REFERENCES [Customer]([ID])
);

CREATE TABLE [Voyages] (
  [shipId] int,
  [departure] datetime,
  [arrival] datetime,
  CONSTRAINT [FK_Voyages.shipId]
    FOREIGN KEY ([shipId])
      REFERENCES cruiseShip([Id])
);

CREATE TABLE [Itinerary] (
  [shipId] int,
  [day] int,
  [City] varchar(50),
  [State, country] varchar(50)
);

