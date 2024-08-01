using GestionDeTareas.Models;
using GestionDeTareas.ViewModels;
using GestionDeTareas.ViewModels.Task;
using Microsoft.AspNetCore.Mvc;

namespace GestionDeTareas.Controllers
{
    public class TaskController : ControllerBase
    {
        private readonly GestionDeTareasDbContext _context;
        public IConfiguration _configuration;

        public TaskController(GestionDeTareasDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpGet()]
        [Route("ListTask")]
        public IActionResult ListTask()
        {
            var response = new Response();
            try
            {
                var tasks = _context.Tasks.ToList();
                response.Exito = 1;
                response.Data = tasks;
                response.Mensaje = "Listado cargado";
            }
            catch (Exception ex)
            {
                response.Exito = -1;
                response.Mensaje = ex.Message;
            }
            return Ok(response);
        }

        [HttpPost()]
        [Route("CreateTask")]
        public IActionResult CreateTask([FromBody] TaskViewModel model) 
        {
            var response = new Response();
            try
            {
                //Se valida que la tarea no tenga el mismo nombre que otra
                var taskRepetido = _context.Tasks.FirstOrDefault(x => x.Title == model.Title && x.Id != model.Id);
                if (taskRepetido != null)
                {
                    response.Exito = default;
                    response.Mensaje = "La tarea ya existe, por favor ingrese un nuevo titulo";
                }
                else
                {
                    var task = new Models.Task()
                    {
                        Title = model.Title,
                        IsCompleted = false
                    };
                    _context.Tasks.Add(task);
                    _context.SaveChanges();
                    response.Exito = 1;
                    response.Mensaje = "Tarea creada";
                }
                
            }
            catch (Exception ex)
            {
                response.Exito = -1;
                response.Mensaje = ex.Message;
            }
            return Ok(response);
        }

        [HttpPut()]
        [Route("UpdateTask")]
        public IActionResult UpdateTask([FromBody] TaskViewModel model)
        {
            var response = new Response();
            try
            {
                //Se valida primero si el task existe
                var taskEnDb = _context.Tasks.FirstOrDefault(x => x.Id == model.Id);
                if (taskEnDb != null)
                {
                    //Se valida que la tarea no tenga el mismo nombre que otra
                    var taskRepetido = _context.Tasks.FirstOrDefault(x => x.Title == model.Title && x.Id != model.Id);
                    if (taskRepetido != null)
                    {
                        response.Exito = -1;
                        response.Mensaje = "La tarea ya existe, por favor ingrese un nuevo titulo";
                    }
                    //Se modifican los campos necesarios
                    else
                    {
                        taskEnDb.Title = model.Title;
                        taskEnDb.IsCompleted = model.IsCompleted;
                        _context.Tasks.Update(taskEnDb);
                        _context.SaveChanges();
                        response.Exito = 1;
                        response.Mensaje = "Tarea editada";
                    }                
                }
                else
                {
                    response.Exito = default(int);
                    response.Mensaje = "No se encontró la tarea";
                }
                
               
            }
            catch (Exception ex)
            {
                response.Exito = -2;
                response.Mensaje = ex.Message;
            }
            return Ok(response);
        }

    }
}
