using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    //grade calculator model
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public float project { get; set; }
        [Required]
        [Range(0, 100)]
        public float quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public float exam { get; set; }
        [Required]
        [Range(0, 100)]
        public float intex { get; set; }
    }
}
