using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment.Models;

namespace Assignment.Controllers
{
    //my controller
    public class HomeController : Controller
    {
        //index method
        public IActionResult Index()
        {
            return View();
        }

        //grade calculator get view method
        [HttpGet("GradeCalculator")]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //http post grade calculator method
        [HttpPost("GradeCalculator")]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
