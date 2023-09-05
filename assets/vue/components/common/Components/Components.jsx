import classNames from "classnames";
import { waitInput } from "pw-components-core-dev";
import { idGenerator } from "core/tools/security/idGenerator.js";
import { PwInput, PwSelect, PwLoading } from "pw-components-jsx-dev";
import { determinePagination } from "modules/common/datatableUtils.js";

class Components {
    static getMethods() {
        return {
            $setupInstance(elements) {
                elements.map((element) => {
                    element.instance = this;
                });
            },
            $input(field, callback = () => {}) {
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);
                return (
                    <div class="form-group">
                        <label class="pw_input">
                            {field.label}
                            <input
                                data-jid={field.id}
                                ref={id}
                                value={field.value}
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                required={field.required}
                                class="pw_input form-control"
                                onInput={field.checkValidation.bind(field)}
                                onPaste={field.checkRestriction.bind(field)}
                                onKeypress={field.checkRestriction.bind(field)}
                            />
                        </label>

                        <span
                            class={classNames(
                                "form_feedback_error",
                                field.isValid
                                    ? "d-none"
                                    : "invalid-feedback d-block",
                            )}
                        >
                            {field.errorMessage}
                        </span>
                    </div>
                );
            },
            $inputInline(field, callback = () => {}) {
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);

                var onInput = (event) =>{
                    var {currentTarget:input} = event
                    waitInput(input, () =>{
                        var {value} = input
                        var {onInput} = field
                        onInput({value, event, input})
                    }, 600)
                }
                return (
                    <div class="inline_input">
                        <span>{field.label}</span>
                        
                        <input
                            data-jid={field.id}
                            ref={id}
                            value={field.value}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                            class="form-control"
                            onInput={onInput}
                            onPaste={onInput}
                            onKeypress={onInput}
                        />

                        <span
                            class={classNames(
                                "form_feedback_error",
                                field.isValid
                                    ? "d-none"
                                    : "invalid-feedback d-block",
                            )}
                        >
                            {field.errorMessage}
                        </span>
                    </div>
                );
            },
            $inputWithIcon(field, params) {
                var { content="", callback = () => {}, customClass=""} = params;
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);
                var onInput = (event) =>{
                    var {currentTarget:input} = event
                    waitInput(input, () =>{
                        var {value} = input
                        var {onInput} = field
                        onInput({value, event, input})
                    }, 500)
                }
                return (
                    <label>
                        {content}
                        <input
                            data-jid={field.id}
                            ref={id}
                            value={field.value}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                            class={classNames("form-control", customClass)}
                            onInput={onInput}
                            onPaste={onInput}
                            onKeypress={onInput}
                        />
                    </label>

                );
            },
            $phone(field, callback = () => {}) {
                this.$setupInstance([field]);
                var id = field.id;
                if(!field.id){
                    id = idGenerator();
                    field.id = id;
                }
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);
                return (
                    <div class="form-group">
                        <label class="pw_input">
                            {field.label}
                            <PwInput
                                ref={id}
                                config={{
                                    mask: "phone",
                                    placeholder: field.placeholder,
                                    name: field.name,
                                    required: field.required,
                                    className: "pw_input form-control",

                                    isDirect: true,
                                    onInput: field.checkValidation.bind(field),
                                    onPaste: field.checkRestriction.bind(field),
                                    onKeypress:
                                        field.checkRestriction.bind(field),
                                    onRender: (instance) => {
                                        field.component = instance;
                                    },
                                    params: {
                                        attrs: {
                                            "data-jid": field.id,
                                        },
                                    },
                                }}
                            />
                        </label>

                        <span
                            class={classNames(
                                "form_feedback_error",
                                field.isValid
                                    ? "d-none"
                                    : "invalid-feedback d-block",
                            )}
                        >
                            {field.errorMessage}
                        </span>
                    </div>
                );
            },
            $select(field, callback = () =>{}) {
                this.$setupInstance([field])
                var id = field.id;
                if(!field.id){
                    id = idGenerator();
                    field.id = id;
                }
                setTimeout(() =>{
                    var {[id]:element} = this.$refs 
                    callback({element})
                }, 100);
                var {onChange = field.checkValidation.bind(field)} = field
                return (
                    <div class="form-group">
                        <label class="pw_input">
                            {field.label}
                            <PwSelect
                                ref={id}
                                config={{
                                    mask: "phone",
                                    placeholder:field.placeholder,
                                    name:field.name,
                                    required:field.required,
                                    className:"pw_input form-control",

                                    isDirect:true,
                                    onChange,
                                    onRender:(instance) =>{
                                        field.component = instance
                                    },
                                    options: field.options,
                                    params: {
                                        attrs: {
                                            "data-jid":field.id
                                        },
                                    },
                                }}
                            />
                        </label>
                        <span
                            class={classNames(
                                "form_feedback_error",
                                field.isValid
                                    ? "d-none"
                                    : "invalid-feedback d-block"
                            )}
                        >
                            {field.errorMessage}
                        </span>
                    </div>
                );
            },
            $commonSelect(field, callback = () =>{}) {
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);
                var optionsElements = () => {
                    return field.options.map((option = {}, index) => {
                        var { value, content, params = {} } = option;
                        return (
                            <option 
                                value={value}
                                {...params}
                            >
                                {content}
                            </option>
                        )
                    })
                }
                var onChange = (event) =>{
                    var {currentTarget:input} = event
                    waitInput(input, () =>{
                        var {value} = input
                        var {onChange=() => {}} = field
                        onChange({value, event, input})
                    }, 100)
                }

                return (
                    <select
                        data-jid={field.id}
                        ref={id}
                        value={field.value}
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        required={field.required}
                        class={classNames("pw_input form-control", field.class)}
                        onChange={onChange}
                    >
                        {optionsElements()}
                    </select>
                );
            },
            $button(button, params = {}) {
                var {content = ""} = params;
                this.$setupInstance([button]);
                return (
                    <div class="form-group">
                        <button
                            class="btn btn-primary"
                            onClick={button.handleValidation.bind(button)}
                        >
                            {content} {button.text}
                        </button>
                    </div>
                );
            },
            $iconButton(button, params) {
                var {content="", customClass=""} = params;
                this.$setupInstance([button]);
                return (
                    <button
                        class={classNames("btn m-1 p-1", customClass)}
                        onClick={button.handleValidation.bind(button)}
                    >
                        {content}
                    </button>
                );
            },
            $iconButtonCork(button, params) {
                var {content="", customClass=""} = params;
                this.$setupInstance([button]);
                return (
                    <button
                        class={classNames(customClass)}
                        onClick={button.handleValidation.bind(button)}
                    >
                        {content}
                    </button>
                );
            },
            $pagination(pagination) {
                var pages = () => {
                    var pages = [];
                    for (
                        var page = 1;
                        page <= pagination.pages;
                        page = page + 1
                    ) {
                        var active = () =>{
                            if(page == pagination.page){
                                return "active"
                            }
                            return ""
                        }
                        pages.push(
                            <li class={classNames("page-item", active())}>
                                <a class={classNames("page-link")} href="#!" onClick={pagination.goto(page)}>
                                    {page}
                                </a>
                            </li>,
                        );
                    }
                    return pages;
                };

                var disablePrev = () => {
                    if(pagination.page == 1){
                        return "disabled"
                    }
                    return ""
                }

                var disableNext = () => {
                    if(pagination.page == pagination.pages){
                        return "disabled";
                    }
                    return ""
                }
                return (
                    <nav>
                        <ul class="pagination">
                            <li class={classNames("page-item", disablePrev())}>
                                <a class="page-link" href="#" onClick={pagination.prev}>
                                    Previous
                                </a>
                            </li>
                            {pages()}
                            <li class={classNames("page-item", disableNext())}>
                                <a class="page-link" href="#" onClick={pagination.next}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            },
            $dottedPagination(pagination, params={}) {
                var { prevContent="Previous", nextContent="Next" } = params;
                var pages = () => {
                    var pages = [];

                    var paginations = determinePagination(pagination.page, pagination.pages, 5);

                    paginations.map((page) => {
                        var active = () =>{
                            if(page == pagination.page){
                                return "active"
                            }
                            return ""
                        }
                        if (typeof page == "object") {
                            var { go = ""} = page;
                            pages.push(
                                <li
                                    class="page-item"
                                    onClick={pagination.goto(go)}
                                >
                                    <a class="page-link" href="#">
                                        ...
                                    </a>
                                </li>
                            );
                        } else {
                            pages.push(
                                <li
                                    class={classNames(
                                        "page-item", active()
                                    )}
                                    onClick={pagination.goto(page)}
                                >
                                    <a class="page-link" href="#">
                                        {page}
                                    </a>
                                </li>
                            );
                        }
                    });
                    
                    return pages;
                };

                var disablePrev = () => {
                    if(pagination.page == 1){
                        return "disabled"
                    }
                    return ""
                }

                var disableNext = () => {
                    if(pagination.page == pagination.pages){
                        return "disabled";
                    }
                    return ""
                }
                return (
                    <nav>
                        <ul class="pagination">
                            <li class={classNames("page-item", disablePrev())}>
                                <a class="page-link" href="#" onClick={pagination.prev}>
                                    {prevContent}
                                </a>
                            </li>
                            {pages()}
                            <li class={classNames("page-item", disableNext())}>
                                <a class="page-link" href="#" onClick={pagination.next}>
                                    {nextContent}
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            },
            $checkboxComponent(field, callback = () =>{}) {
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);

                var {checked = false} = field;

                var onChange = (event) =>{
                    var {currentTarget:input} = event
                    waitInput(input, () =>{
                        var {value, checked=false} = input
                        var {onChange=() => {}} = field
                        onChange({value, event, input, checked})
                    }, 100)
                }

                return (
                    <label class="chekbox_column">
                        <input 
                            type="checkbox" 
                            class="check_column"
                            checked={checked}
                            onChange={onChange}
                        />
                        <span class="check_column_indicator"></span>
                    </label>
                )
            },
            $switchComponent(field, callback = () =>{}) {
                this.$setupInstance([field]);
                var id = idGenerator();
                setTimeout(() => {
                    var { [id]: element } = this.$refs;
                    callback({ element });
                }, 100);

                var {checked = false} = field;

                var onChange = (event) =>{
                    var {currentTarget:input} = event
                    waitInput(input, () =>{
                        var {value, checked=false} = input
                        var {onChange=() => {}} = field
                        onChange({value, event, input, checked})
                    }, 100)
                }

                return (
                    <label class="switch s-icons s-outline s-outline-success align-middle mb-0 ml-1">
                        <input 
                            type="checkbox"
                            checked={checked}
                            onChange={onChange}
                        />
                        <span class="slider round"></span>
                    </label>
                )
            },
            $paginationCork(pagination, params={}) {
                var { prevContent="Prev", nextContent="Next" } = params;
                var pages = () => {
                    var pages = [];
                    for (
                        var page = 1;
                        page <= pagination.pages;
                        page = page + 1
                    ) {
                        var active = () =>{
                            if(page == pagination.page){
                                return "active"
                            }
                            return ""
                        }
                        pages.push(
                            <li class={classNames("paginate_button  page-item", active())}>
                                <a class={classNames("page-link")} href="#!" onClick={pagination.goto(page)}>
                                    {page}
                                </a>
                            </li>,
                        );
                    }
                    return pages;
                };
                var disablePrev = () => {
                    if(pagination.page == 1){
                        return "disabled"
                    }
                    return ""
                }

                var disableNext = () => {
                    if(pagination.page == pagination.pages){
                        return "disabled";
                    }
                    return ""
                }
                //TODO add disable state on next prev
                return (
                    <nav>
                        <ul class="pagination">
                            <li class={classNames("paginate_button page-item previous", disablePrev())}>
                                <a class="page-link" href="#" onClick={pagination.prev}>
                                    {prevContent}
                                </a>
                            </li>
                            {pages()}
                            <li class={classNames("paginate_button page-item next", disableNext())}>
                                <a class="page-link next" href="#" onClick={pagination.next}>
                                    {nextContent}
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            },
            $commonLoading(params={}) {
                var {
                    isVisible=false, 
                    hasConfig=true, 
                    ref="loading",
                    mode="border",
                    color="primary",
                    className = "",
                } = params;
                return (
                    <PwLoading
                        ref={ref}
                        config={{
                            isVisible: isVisible,
                            hasConfig:hasConfig,
                            mode,
							color,
                            className
                        }}
                    />
                );
            },
            $statistic(pagination){
                var { 
                    statShowText = "Showing page",
                    page = 1,
                    statOf = "of",
                    pages = 0 
                } = pagination;
                if(pages >= 2){
                    return `${statShowText} ${page} ${statOf} ${pages}`;
                }
            },
            
        };
    }
}

export default Components;
