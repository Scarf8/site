export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}