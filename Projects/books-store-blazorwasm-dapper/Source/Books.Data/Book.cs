namespace Books.Data
{

    public class Book
    {
        public int Id { get; set; }

        public string PictureUr { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public bool IsActive { get; set; }

        public string ISBN { get; set; }

        public int Pages { get; set; }
    }

}
