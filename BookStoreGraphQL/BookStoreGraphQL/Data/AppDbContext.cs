using BookStoreGraphQL.Models;
using Microsoft.EntityFrameworkCore;

namespace BookStoreGraphQL.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
    }
}
