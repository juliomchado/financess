import { useMemo } from 'react';
import ReactSelect, {
    Props as SelectProps, StylesConfig,
} from 'react-select';
import { Container } from './styles';

interface Props extends SelectProps {
    name: string;
    label: string;
    // error: string;
}

export default function Select({ name, label, options, ...rest }: Props) {

    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            width: '480px',
            height: '48px',
            background: 'var(--input-background)',
            border: '1px solid var(--primary-color)',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            overflow: 'hidden',
            padding: '0 8px',
            transition: '0.5s',
            '&:hover': {
                border: '1px solid  var(--primary-color)',
            }
        }),
    }

    const randomId = useMemo(() => Math.random().toString(36).substring(7), []);

    return (
        <>
            <Container>
                <label htmlFor={randomId}>{label}</label>
                <ReactSelect
                    name={name}
                    styles={customStyles}
                    {...rest}
                />

                {/* <span>{error}</span> */}

            </Container>
        </>
    );
};