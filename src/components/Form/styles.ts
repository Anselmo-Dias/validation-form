import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Switch from '@radix-ui/react-switch'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select'

export const FormUserContainer = styled.section`
  margin-top: 5rem;
`
export const Wrapper = styled.div`
  width: min(76rem, 100%);
  margin-inline: auto;

  background: #fff;
  border-radius: 8px;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    font-size: 3rem;
    padding: 3.2rem;

    span {
      color: green;
    }
  }
`
export const Form = styled.form`
  padding: 9.6rem 9.8rem 9.2rem;
  input:focus,
  input:valid {
    outline: 1px solid #7a5cfa;
  }
`

export const InputsTypeTextAndPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    label {
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.8rem;

      color: #666666;
    }

    input {
      padding: 1.6rem;
      gap: 1rem;

      width: 100%;
      height: 5.6rem;

      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 8px;
    }
  }
  div + div {
    margin-top: 3.2rem;
  }
`

export const ReportingProblemMessage = styled.div`
  width: 100%;

  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 3.2rem;

  text-align: left;

  label {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.8rem;

    color: #666666;
  }

  input {
    padding: 1.6rem;
    gap: 1rem;

    width: 100%;
    height: 5.6rem;

    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 8px;
  }
`

export const ButtonsToChecked = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  gap: 3.2rem;
  margin-top: 3.2rem;
`
export const InputTypeChecked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`

export const CheckboxRoot = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  width: 2.4rem;
  height: 2.4rem;

  border-radius: 8px;
  border: 1px solid #cccccc;
`
export const CheckboxIndicator = styled(Checkbox.Indicator)``

export const InputSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;

    color: #666666;
  }
`
export const SwitchRoot = styled(Switch.Root)`
  width: 49px;
  height: 26px;
  background-color: #fff;
  border-radius: 32px;
  position: relative;

  border: 1px solid #cccccc;

  &[data-state='checked'] {
    background-color: white;
  }

  &[data-state='unchecked'] {
    background: #7a5cfa;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8rem;

    &::after {
      content: 'on';
      text-align: right;
    }
  }
`
export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;

  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  background: #f4f4f4;
  border: 1px solid #cccccc;
  border-radius: 32px;

  &[data-state='checked'] {
    transform: translateX(24px);
  }

  &[data-state='unchecked'] {
    background: #fff;
    border: 1px solid #fff;
  }
`

export const InputsRadioGroup = styled.div``

export const RadioRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.6rem;

    label {
      font-weight: 400;
      font-size: 1.6rem;

      color: #666666;
    }
  }
`
export const RadioItem = styled(RadioGroup.Item)`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
`
export const RadioIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #7a5cfa;
  }
`
export const InputTypeSelect = styled.div`
  width: 100%;

  select {
    width: 100%;
    height: 5.6rem;

    padding: 1.6rem;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:focus {
      outline: 1px solid #7a5cfa;
    }

    option {
      padding: 2rem;
    }
  }
`

export const SelectRoot = styled(Select.Root)``
export const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem;

  width: 50rem;
  height: 5.6rem;

  gap: 1rem;

  background-color: #fff;
  color: #333333;

  border-radius: 8px 8px 0px 0px;
  border: 2px solid #7a5cfa;
`
export const SelectIcon = styled(Select.Icon)`
  color: #333333;
`
export const SelectContent = styled(Select.Content)`
  /* overflow: hidden; */
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`
export const SelectItem = styled(Select.Item)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem;
  gap: 1rem;

  width: 56.4rem;
  height: 5.6rem;

  background: #ffffff;
  border: 1px solid #cccccc;

  &[data-disabled] {
    color: #7a5cfa;
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: #7a5cfa;
    color: #fff;
  }
`
export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: #7a5cfa;
  cursor: pointer;
`

interface VariantButtons {
  DiferentStyles: 'Model'
}
export const ButtonsOfResetAndSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 6rem;

  button {
    width: 140px;

    padding: 1.6rem;

    border: 1px solid #7a5cfa;
    border-radius: 8px;

    color: #7a5cfa;
  }

  button[type='submit'] {
    background-color: #7a5cfa;
    color: #fff;
  }
`

export const ButtonTypeSubmit = styled.button<VariantButtons>``
