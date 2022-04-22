using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ExcelsiorAPI.Models.EF
{
    public partial class excelsiorDbContext : DbContext
    {
        public excelsiorDbContext()
        {
        }

        public excelsiorDbContext(DbContextOptions<excelsiorDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CruiseShip> CruiseShips { get; set; } = null!;
        public virtual DbSet<CruiseTicket> CruiseTickets { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Itinerary> Itineraries { get; set; } = null!;
        public virtual DbSet<Voyage> Voyages { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=p2project.database.windows.net ;database=excelsiorDb; User Id = project2; Password=Password@4567");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CruiseShip>(entity =>
            {
                entity.ToTable("cruiseShip");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.AdultPrice)
                    .HasColumnType("money")
                    .HasColumnName("adultPrice");

                entity.Property(e => e.ChildPrice)
                    .HasColumnType("money")
                    .HasColumnName("childPrice");

                entity.Property(e => e.CruiseLine)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cruiseLine");

                entity.Property(e => e.Destination)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Img1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("img1");

                entity.Property(e => e.Img2)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("img2");

                entity.Property(e => e.Img3)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("img3");

                entity.Property(e => e.Img4)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("img4");

                entity.Property(e => e.PortCity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Port City");

                entity.Property(e => e.PortStateCountry)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Port State, Country");

                entity.Property(e => e.RoomPrice)
                    .HasColumnType("money")
                    .HasColumnName("roomPrice");

                entity.Property(e => e.RoomsAvailable).HasColumnName("Rooms Available");

                entity.Property(e => e.ShipName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("shipName");

                entity.Property(e => e.TotalRooms).HasColumnName("Total Rooms");
            });

            modelBuilder.Entity<CruiseTicket>(entity =>
            {
                entity.ToTable("cruiseTicket");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.AdultGuests).HasColumnName("adultGuests");

                entity.Property(e => e.ChildGuests).HasColumnName("childGuests");

                entity.Property(e => e.CustId).HasColumnName("custID");

                entity.Property(e => e.ShipId).HasColumnName("shipID");

                entity.Property(e => e.TotalCost)
                    .HasColumnType("money")
                    .HasColumnName("totalCost");

                entity.HasOne(d => d.Cust)
                    .WithMany(p => p.CruiseTickets)
                    .HasForeignKey(d => d.CustId)
                    .HasConstraintName("FK_Cruise Ticket.custID");

                entity.HasOne(d => d.Ship)
                    .WithMany(p => p.CruiseTickets)
                    .HasForeignKey(d => d.ShipId)
                    .HasConstraintName("FK_Cruise Ticket.shipID");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Balance)
                    .HasColumnType("money")
                    .HasColumnName("balance");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("state");

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("streetAddress");

                entity.Property(e => e.ZipCode).HasColumnName("zipCode");
            });

            modelBuilder.Entity<Itinerary>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Itinerary");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Day).HasColumnName("day");

                entity.Property(e => e.ShipId).HasColumnName("shipId");

                entity.Property(e => e.StateCountry)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("State, country");
            });

            modelBuilder.Entity<Voyage>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Arrival)
                    .HasColumnType("datetime")
                    .HasColumnName("arrival");

                entity.Property(e => e.Departure)
                    .HasColumnType("datetime")
                    .HasColumnName("departure");

                entity.Property(e => e.ShipId).HasColumnName("shipId");

                entity.HasOne(d => d.Ship)
                    .WithMany()
                    .HasForeignKey(d => d.ShipId)
                    .HasConstraintName("FK_Voyages.shipId");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
