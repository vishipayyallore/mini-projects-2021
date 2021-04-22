using Books.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Books.API.Data
{

    public interface IBookRepository
    {
        //Task<bool> AddVideo(Video video);

        Task<IEnumerable<Book>> GetAllBooks();

        //Task<Video> GetVideoById(int Id);

        //Task<bool> UpdateVideo(Video video);

        //Task<bool> DeleteVideo(int id);

    }

}
