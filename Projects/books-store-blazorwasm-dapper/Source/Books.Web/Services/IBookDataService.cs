using Books.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Books.Web.Services
{
    public interface IBookDataService
    {
        Task<IEnumerable<Book>> GetAllBooks();
    }

}
