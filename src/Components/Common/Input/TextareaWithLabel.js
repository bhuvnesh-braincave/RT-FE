export default function TextareaWithLabel({input, setInput,colClass,marginClass,label,placeholder,rows}) {
    return(
        <div className={colClass || "col-md-6"}>
            <div className={marginClass || "mb-3"}>
                <label className="form-label">{label}</label>
                <textarea rows={rows} placeholder={placeholder} className="form-control" />
            </div>
        </div>
    )
};
