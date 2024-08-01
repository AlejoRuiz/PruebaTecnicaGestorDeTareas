using Microsoft.EntityFrameworkCore;

namespace GestionDeTareas.Models
{
    public class GestionDeTareasDbContext : DbContext
    {
        public GestionDeTareasDbContext(DbContextOptions<GestionDeTareasDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }
    }
}
