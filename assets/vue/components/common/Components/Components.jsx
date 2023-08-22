import classNames from "classnames";
import { waitInput } from "pw-components-core-dev";
import { idGenerator } from "core/tools/security/idGenerator.js";
import { PwInput, PwSelect } from "pw-components-jsx-dev";

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
            $phone(field, callback = () => {}) {
                console.log("000000")
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
                var id = idGenerator();
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
            $button(button) {
                this.$setupInstance([button]);
                return (
                    <div class="form-group">
                        <button
                            class="btn btn-primary"
                            onClick={button.handleValidation.bind(button)}
                        >
                            {button.text}
                        </button>
                    </div>
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
                //TODO add disable state on next prev
                return (
                    <nav>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" onClick={pagination.prev}>
                                    Previous
                                </a>
                            </li>
                            {pages()}
                            <li class="page-item">
                                <a class="page-link" href="#" onClick={pagination.next}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                );
            },
        };
    }
}

export default Components;
