import "./recipeCard.css"
const CardBody = ({ item, handleClick, handleDelete }) => {

    const { title, time, id } = item;

    return (
        <div className="card m-3 shadow">
            <div className="card-body fs-5">
                <div className="row">
                    <div onClick={() => handleClick(item)} className="col-10">{title} - {time} </div>
                    <div className="col">
                        <button onClick={() => handleDelete(id)} className="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const RecipeCard = ({ form, handleClick, handleDelete, isCard }) => {

    if (!isCard) {
        return null;
    }

    return (
        <div className="cardBox boxHeightTop mousePointer">
            {form.map((item) => {
                return <CardBody key={item.id} item={item} handleClick={handleClick} handleDelete={handleDelete} />
            })}
        </div>
    );
};