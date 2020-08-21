initSidebarItems({"enum":[["RelocDistance","Notion of \"relocation distance\". This gives an estimate of how far away a symbol will be from a reference."]],"struct":[["InstColor","An \"instruction color\" partitions CLIF instructions by side-effecting ops. All instructions with the same \"color\" are guaranteed not to be separated by any side-effecting op (for this purpose, loads are also considered side-effecting, to avoid subtle questions w.r.t. the memory model), and furthermore, it is guaranteed that for any two instructions A and B such that color(A) == color(B), either A dominates B and B postdominates A, or vice-versa. (For now, in practice, only ops in the same basic block can ever have the same color, trivially providing the second condition.) Intuitively, this means that the ops of the same color must always execute \"together\", as part of one atomic contiguous section of the dynamic execution trace, and they can be freely permuted (modulo true dataflow dependencies) without affecting program behavior."],["Lower","Machine-independent lowering driver / machine-instruction container. Maintains a correspondence from original Inst to MachInsts."],["LowerInput","A representation of all of the ways in which an instruction input is available: as a producing instruction (in the same color-partition), as a constant, and/or in an existing register. See [LowerCtx::get_input] for more details."]],"trait":[["LowerBackend","A machine backend."],["LowerCtx","A context that machine-specific lowering code can use to emit lowered instructions. This is the view of the machine-independent per-function lowering context that is seen by the machine backend."]]});