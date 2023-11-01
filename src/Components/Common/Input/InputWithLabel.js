export default function InputWithLabel({colClass,placeholder,label,marginClass,type,setInput,input}) {
    return(
        <div className={colClass || "col-md-6"}>
            <div class={marginClass || "mb-3"}>
                <label class="form-label">{label}</label>
                <input type={type || "text"} class="form-control" placeholder={placeholder} />
            </div>
        </div>
    )
};
