using System;

namespace DatingApp.API.DTOs
{
    public class PhotosToDetailedDTO
    {
         public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime AddedDate { get; set; }
        public bool IsMain { get; set; }

    }
}