import {DetailedHTMLProps, HTMLAttributes, useContext} from "react";
import NavbarBackdrop from "./NavbarBackdrop";
import NavbarContext, {INavbarContext} from "./NavbarContext";
import NavbarCloseButton from "./NavbarCloseButton";
import sections from "../../../datasources/sections";
import SectionModel from "../../../models/Section.model";
import {AnimatePresence, motion} from "framer-motion";
import NavbarContent from "./NavbarContent";

const MotionNavbarContent = motion(NavbarContent)

const sideVariants = {
	closed: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1,
		}
	},
	open: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: 1,
		}
	}
};

const itemVariants = {
	closed: {
		opacity: 0
	},
	open: {opacity: 1}
};

const Navbar = (props: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'ref' | 'children'>) => {
	const {state, toggle} = useContext<INavbarContext>(NavbarContext)

	const _handleOnClose = () => {
		toggle()
	}


	return (
		<AnimatePresence>
			{state && (
				<>
					<NavbarBackdrop onClick={_handleOnClose}/>
					<MotionNavbarContent
						{...props}
						initial={{width: 0}}
						animate={{
							width: 300
						}}
						exit={{
							width: 0,
							transition: {delay: 0.7, duration: 0.3}
						}}
					>
						<motion.div
							id="navbar_content"
							initial={{opacity: 0}}
							whileInView={{
								opacity: 1,
								transition: {duration: 0.3}
							}}>
							<NavbarCloseButton
								onClick={_handleOnClose}
								src='/images/close.svg'/>
							<motion.ul
								initial="closed"
								animate="open"
								exit="closed"
								variants={sideVariants}
							>
								{sections.map((section: SectionModel, index: number) => (
									<motion.li
										key={index}
										variants={itemVariants}>
										<a
											href={section.getHref}
											onClick={_handleOnClose}>
											{section.title}
										</a>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					</MotionNavbarContent>
				</>
			)}
		</AnimatePresence>
	)
}

export default Navbar
