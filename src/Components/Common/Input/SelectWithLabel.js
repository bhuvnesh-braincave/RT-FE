export default function SelectWithLabel({colClass,marginClass,input,setInput,options,label}) {
    let list = options?.map((ele,i)=>(
        <option value={ele.value}>{ele.title}</option>
    ))
    return(
        <div class={colClass || "col-md-6"}>
            <div class={marginClass || "mb-3"}>
                <label class="form-label">{label}</label>
                <select class="form-control" style="width: 100%;">
                    <option value="">Select</option>
                    {list}
                </select>
            </div>
        </div>
    )
};
