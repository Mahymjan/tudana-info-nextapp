import React from 'react'
import { Formik, Form, Field, ErrorMessage , useField} from 'formik';
import { useTranslation } from 'next-i18next';
import {AiOutlineClose} from 'react-icons/ai';
import * as Yup from 'yup';

type FormCommunicateProps = {
  show?: boolean,
  setShow?: any
}

const  FormCommunicate = (props: FormCommunicateProps) => {
  const {show, setShow} = props
    const {t} = useTranslation()
    const MyTextArea = ({label, ...props}: any) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
      };
      
    const initialValues = {
        name: '',
        phone: '',
        feedback: ''
    }
    const validationSchema = Yup.object().shape({
        phone:  Yup.string().min(12, 'It short').required('Required'),
        name: Yup.string().min(3, 'It short').required('Required'),
        feedback: Yup.string().nullable(),
    })
    const onSubmit = async(values: any, props: any) => {
        console.log(values, ' ', props)
        // try {
        //     const res = await SendEmail(values)
        //     setShow(false)
        //     console.log('response', res)
        // } catch (error) {
        //     console.log(error)
        // }

    }

  return (
    <div className='w-96 flex flex-col rounded-lg for_communicate bg-white-500 p-5 space-y-4 shadow-2xl z-50'>
        <div className='flex justify-between items center gap-6 pb-4'>
            <h4 className='mx-auto font-bold text-lg'>{t('form_head')}</h4>
            <button className='hover:bg-slate rounded-full z-50 p-2' onClick={() => setShow(!show)} >
                <AiOutlineClose />
            </button>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <Form className='flex flex-col gap-4'>
                        <div>
                            <h4 className='mb-2'>{t('phone')}</h4>
                            <Field
                                label='phone'
                                type='text'
                                name='phone'
                                value={props.values.phone}
                                onChange={props.handleChange}
                                className='w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset'
                            /> 
                            <ErrorMessage name='phone' />
                        </div>
                        <div>
                        <h4 className='mb-2'>{t('name')}</h4>
                            <Field
                                label='name'
                                type='text'
                                name='name' 
                                value={props.values.name}
                                onChange={props.handleChange}
                                className='w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset'
                                />
                                <ErrorMessage name='name' />
                        </div>
                        <div >
                            <h4 className='mb-2'>{t('faq')}</h4>
                            <MyTextArea
                                name="feedback"
                                rows="3"
                                className="w-full resize rounded-md border border-gray p-3 focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset" 
                            />
                            <ErrorMessage name='feedback' />
                        </div>
                        <button className='bg-green-600 text-white-500 p-2 rounded'>{t('confirm')}</button>
                </Form>
                )}
            </Formik>
    </div>
  )
}


{/* <input ref={nameRef} onChange={e => setName(e.target.value)} type="text" placeholder='Name' className='p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset' />
<input ref={phoneRef} type="telephone" placeholder='Phone number' className='p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset' />
<textarea ref={commentRef} className="resize rounded-md border border-gray p-3 focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset" placeholder='Comments'></textarea> */}
export {FormCommunicate}