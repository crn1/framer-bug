import { motion, useTransform, useViewportScroll } from 'framer-motion'

const Index = () => {

	const { scrollYProgress } = useViewportScroll()	
	const invertFilter = useTransform(scrollYProgress, [0, 1], ['invert(0)', 'invert(1)'])

	return (
		<div style={{ height: '200vh' }}>
			<motion.div
				style={{
					position: 'fixed',
					width: 100,
					height: 100,
					backgroundColor: 'green',
					scale: invertFilter,
				}}
			/>
		</div>
	)
}

export default Index
