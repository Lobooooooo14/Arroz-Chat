import React, { useState } from "react"
import { Box, Content, Title, Buttons, Button } from "./style"
import { AnimatePresence } from "framer-motion"


interface Props {
    title: string
    description: any
}

const Alert: React.FC<Props> = ({ title, description }) => {
    const [visible, setVisible] = useState(true)

    return (
        <AnimatePresence>
            {visible && (
                <Content
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5}}
                >
                    <Box
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <Title>
                            {title}
                        </Title>
                        {description}
                        <Buttons>
                            <Button
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                OK
                            </Button>
                        </Buttons>
                    </Box>
                </Content>
            )}
        </AnimatePresence>
    )
}

export default Alert