using System.ComponentModel.DataAnnotations;

namespace BookStoreGraphQL.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Type { get; set; }
        public decimal Price { get; set; }
    }
}
