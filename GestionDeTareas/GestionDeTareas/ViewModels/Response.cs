namespace GestionDeTareas.ViewModels
{
    public class Response
    {
        public int Exito { get; set; }
        public string Mensaje { get; set; }
        public object Data { get; set; }

        public Response()
        {
            this.Exito = default(int);
        }
    }
}
