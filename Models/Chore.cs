using System;
using System.ComponentModel.DataAnnotations;

namespace ChoreChart.Models
{
    public class Chore
    {
        [Key]
        public int ChoreId { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Letter { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool Daily { get; set; }
    }
}
