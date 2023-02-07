import {
  ButtonsOfResetAndSubmit,
  ButtonsToChecked,
  CheckboxIndicator,
  CheckboxRoot,
  Form,
  FormUserContainer,
  InputsRadioGroup,
  InputsTypeTextAndPassword,
  InputSwitch,
  InputTypeChecked,
  InputTypeSelect,
  RadioIndicator,
  RadioItem,
  RadioRoot,
  ReportingProblemMessage,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SwitchRoot,
  SwitchThumb,
  Wrapper,
} from './styles'
import checkedImg from '../../assets/checked.svg'
import * as Select from '@radix-ui/react-select'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const formValidateSchema = zod.object({
  nameUser: zod.string(),
  passwordUser: zod.string(),
  messageProblem: zod.string(),
  rememberForm: zod.boolean(),
  switch: zod.boolean(),
  radioGroup: zod.string(),
  select: zod.string(),
})

type formValidateSchemaProps = zod.infer<typeof formValidateSchema>

export function FormRegister() {
  const [InforForm, setInforForm] = useState<formValidateSchemaProps>()

  const { control, register, handleSubmit } = useForm<formValidateSchemaProps>({
    resolver: zodResolver(formValidateSchema),
  })

  function handleSubmitForm(data: formValidateSchemaProps) {
    console.log(data)
    setInforForm(data)
  }

  return (
    <FormUserContainer>
      <Wrapper>
        {InforForm ? (
          <strong>
            Cadastro enviado com <span>sucesso</span>!
          </strong>
        ) : (
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <InputsTypeTextAndPassword>
              <div>
                <label htmlFor="nameUser">Username</label>
                <input
                  type="text"
                  id="nameUser"
                  placeholder="Enter username"
                  {...register('nameUser')}
                  required
                />
              </div>
              <div>
                <label htmlFor="passwordUser">Password</label>
                <input
                  type="password"
                  id="passwordUser"
                  placeholder="Enter password"
                  min={4}
                  max={12}
                  {...register('passwordUser')}
                  required
                />
              </div>
            </InputsTypeTextAndPassword>
            <ReportingProblemMessage>
              <label htmlFor="messageProblem">Input Text Label</label>
              <input
                type="text"
                id="messageProblem"
                placeholder="Type here"
                {...register('messageProblem')}
                required
              />
            </ReportingProblemMessage>
            <ButtonsToChecked>
              <InputTypeChecked>
                <Controller
                  control={control}
                  name="rememberForm"
                  render={({ field }) => {
                    return (
                      <CheckboxRoot
                        required
                        onCheckedChange={field.onChange}
                        value={'on'}
                      >
                        <CheckboxIndicator id="Remember">
                          <img src={checkedImg} alt="" />
                        </CheckboxIndicator>
                      </CheckboxRoot>
                    )
                  }}
                />
                <label className="Label" htmlFor="Remember">
                  Remember me
                </label>
              </InputTypeChecked>
              <InputSwitch>
                <Controller
                  control={control}
                  name="switch"
                  render={({ field }) => {
                    return (
                      <SwitchRoot
                        defaultChecked={true}
                        onCheckedChange={field.onChange}
                        value="on"
                        id="switch"
                      >
                        <SwitchThumb />
                      </SwitchRoot>
                    )
                  }}
                />

                {/* <label htmlFor="switch"> off</label> */}
              </InputSwitch>
              <InputsRadioGroup>
                <Controller
                  control={control}
                  name="radioGroup"
                  render={({ field }) => {
                    return (
                      <RadioRoot
                        required
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <div>
                          <RadioItem value="default" id="radio1">
                            <RadioIndicator />
                          </RadioItem>
                          <label htmlFor="radio1">Radio 1</label>
                        </div>

                        <div>
                          <RadioItem value="default2" id="radio2">
                            <RadioIndicator />
                          </RadioItem>
                          <label htmlFor="radio2">Radio 2</label>
                        </div>

                        <div>
                          <RadioItem value="default3" id="radio3">
                            <RadioIndicator />
                          </RadioItem>
                          <label htmlFor="radio3">Radio 3</label>
                        </div>
                      </RadioRoot>
                    )
                  }}
                />
              </InputsRadioGroup>
              <InputTypeSelect>
                <Controller
                  control={control}
                  name="select"
                  render={({ field }) => {
                    return (
                      <SelectRoot
                        required
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <Select.Value placeholder="Dropdown option" />
                          <SelectIcon>
                            <ChevronDownIcon />
                          </SelectIcon>
                        </SelectTrigger>
                        <Select.Portal>
                          <SelectContent>
                            <Select.Viewport>
                              <Select.Group>
                                <SelectItem value="default">
                                  <Select.ItemText>
                                    Dropdown option
                                  </Select.ItemText>
                                </SelectItem>
                                <SelectItem value="valor2">
                                  <Select.ItemText>
                                    Dropdown option 2
                                  </Select.ItemText>
                                </SelectItem>
                                <SelectItem value="valor3">
                                  <Select.ItemText>
                                    Dropdown option 3
                                  </Select.ItemText>
                                </SelectItem>
                              </Select.Group>
                            </Select.Viewport>
                          </SelectContent>
                        </Select.Portal>
                      </SelectRoot>
                    )
                  }}
                />
              </InputTypeSelect>
            </ButtonsToChecked>
            <ButtonsOfResetAndSubmit>
              <button>Reset</button>
              <button type="submit">Send</button>
            </ButtonsOfResetAndSubmit>
          </Form>
        )}
      </Wrapper>
    </FormUserContainer>
  )
}
