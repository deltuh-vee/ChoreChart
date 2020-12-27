using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ChoreChart.Models;

namespace ChoreChart.Data
{
    public class ChoreChartContext : DbContext
    {
        public ChoreChartContext (DbContextOptions<ChoreChartContext> options)
            : base(options)
        {
        }

        public DbSet<ChoreChart.Models.Chore> Chore { get; set; }
    }
}
