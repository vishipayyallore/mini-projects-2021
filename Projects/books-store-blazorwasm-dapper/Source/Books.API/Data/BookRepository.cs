using Books.Data;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Books.API.Data
{

    public class BookRepository : IBookRepository
    {
        private readonly SettingsData _configuration;

        public BookRepository(SettingsData configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public async Task<IEnumerable<Book>> GetAllBooks()
        {
            IEnumerable<Book> books;

            using (var conn = new SqlConnection(_configuration.SqlServerConnection))
            {
                books = await conn.QueryAsync<Book>("[dbo].[usp_get_all_books]",
                                commandType: CommandType.StoredProcedure)
                                .ConfigureAwait(false);
            }

            return books;
        }
    }

}
