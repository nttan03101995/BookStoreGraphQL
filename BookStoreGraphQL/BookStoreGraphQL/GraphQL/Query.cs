using BookStoreGraphQL.Data;
using BookStoreGraphQL.Models;
using HotChocolate;
using HotChocolate.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreGraphQL.GraphQL
{
    public class Query
    {
        //[UseDbContext(typeof(AppDbContext))]
        public IQueryable<Book> GetBooks([Service] AppDbContext context)
        {
            return context.Books;
        }
    }
}
