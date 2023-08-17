import classNames from "classnames";
import { waitInput } from "core/utilities/input/input.js";
import { idGenerator } from "core/tools/security/idGenerator.js";
import { PwInput } from "pw-components-jsx-dev";

class Components {
    static getMethods() {
        return {
            $setupInstance(elements) {
                elements.map((element) => {
                    element.instance = this;
                })
            },
            $input(field, callback = () => {}) {
                this.$setupInstance([field])
                var id = idGenerator();
                setTimeout(() => {
                    var {
                        [id]: element } = this.$refs
                    callback({ element })
                }, 100)
                return (
                    <div class="form-group">
                        <label class="pw_input">
                            {field.label}
                            <input
                                data-jid={field.id}
                                ref={id}
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
                                    : "invalid-feedback d-block"
                            )}
                        >
                            {field.errorMessage}
                        </span>
                    </div>
                );
            },
            $phone(field, callback = () => {}) {
                this.$setupInstance([field])
                var id = idGenerator();
                setTimeout(() => {
                    var {
                        [id]: element } = this.$refs
                    callback({ element })
                }, 100)
                return (
                    <div class="form-group">
                        <label class="pw_input">
                            {field.label}
                            <PwInput
                                ref={id}
                                config={{
                                    mask: "phone",
                                    placeholder:field.placeholder,
                                    name:field.name,
                                    required:field.required,
                                    className:"pw_input form-control",

                                    isDirect:true,
                                    onInput:field.checkValidation.bind(field),
                                    onPaste:field.checkRestriction.bind(field),
                                    onKeypress:field.checkRestriction.bind(field),
                                    onRender:(instance) =>{
                                        field.component = instance
                                    },
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
                this.$setupInstance([button])
                return (
                    <div class="form-group">
                        <button 
                            class="btn btn-primary"
                            onClick={button.handleValidation.bind(button)}
                        >
                            {button.text}
                        </button>
                    </div>
                )
            },
        };
    }
}

export default Components;