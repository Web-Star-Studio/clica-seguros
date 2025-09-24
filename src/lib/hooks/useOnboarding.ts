
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { validateName, validateCpf, sanitizeCpf } from '@/lib/validation/form-validation'

interface FormErrors {
  name?: string
  phone?: string
  cpf?: string
}

const validatePhone = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10 || cleaned.length === 11) {
    return { isValid: true, error: null }
  }
  return {
    isValid: false,
    error: 'Digite um telefone válido (10 ou 11 dígitos)',
  }
}

const sanitizePhone = (phone: string) => {
  return phone.replace(/\D/g, '').slice(0, 11)
}

export const useOnboarding = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    cpf: '',
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [touched, setTouched] = React.useState<Record<string, boolean>>({
    name: false,
    phone: false,
    cpf: false,
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState('')

  const router = useRouter()

  React.useEffect(() => {
    const newErrors: FormErrors = {}
    if (touched.name) {
      const nameResult = validateName(formData.name)
      if (!nameResult.isValid && nameResult.error) {
        newErrors.name = nameResult.error
      }
    }
    if (touched.phone) {
      const phoneResult = validatePhone(formData.phone)
      if (!phoneResult.isValid && phoneResult.error) {
        newErrors.phone = phoneResult.error
      }
    }
    if (touched.cpf) {
      const cpfResult = validateCpf(formData.cpf)
      if (!cpfResult.isValid && cpfResult.error) {
        newErrors.cpf = cpfResult.error
      }
    }
    setErrors(newErrors)
  }, [formData, touched])

  const handleInputChange = (field: string, value: string) => {
    let processedValue = value
    if (field === 'phone') {
      processedValue = sanitizePhone(value)
    } else if (field === 'cpf') {
      processedValue = sanitizeCpf(value).slice(0, 11)
    }
    setFormData(prev => ({
      ...prev,
      [field]: processedValue,
    }))
  }

  const handleInputBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched({ name: true, phone: true, cpf: true })
    setSubmitError('')

    const nameResult = validateName(formData.name)
    const phoneResult = validatePhone(formData.phone)
    const cpfResult = validateCpf(formData.cpf)

    if (!nameResult.isValid || !phoneResult.isValid || !cpfResult.isValid) {
      setSubmitError('Verifique as informações antes de continuar.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    // Simulate async handling while backend is disabled
    await new Promise(resolve => setTimeout(resolve, 400))

    setIsSubmitting(false)
    router.push('/dashboard/contratos')
  }

  const getFieldStatus = (
    field: string,
  ): 'default' | 'error' | 'success' => {
    if (!touched[field]) return 'default'
    return errors[field as keyof FormErrors] ? 'error' : 'success'
  }

  const isValid = React.useMemo(() => {
    return (
      validateName(formData.name).isValid &&
      validatePhone(formData.phone).isValid &&
      validateCpf(formData.cpf).isValid
    )
  }, [formData])

  return {
    formData,
    errors,
    isSubmitting,
    submitError,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
    getFieldStatus,
    isValid,
  }
}
