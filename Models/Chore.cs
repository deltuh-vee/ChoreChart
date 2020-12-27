using System;
using System.ComponentModel.DataAnnotations;

namespace ChoreChart.Models
{
    public class Chore
    {
        [Key]
        public int ChoreId { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public string letter { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public bool weekly { get; set; }
    }
}
